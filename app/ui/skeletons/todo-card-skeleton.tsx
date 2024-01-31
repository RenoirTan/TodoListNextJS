import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
  Spinner
} from "@nextui-org/react";

const COLOR_CHOICES = ["primary", "secondary", "success", "warning", "danger"];

function chooseColor() {
  return COLOR_CHOICES[Math.min(Math.floor(Math.random() * 5), 4)];
}

export default function TodoCardSkeleton() {
  const color = chooseColor();

  return (
    <div className="w-full">
      <div className="border rounded-2xl border-gray">
        <Card>
          <CardHeader className="flex flex-row justify-between w-full">
            <Skeleton className="h-[2em] w-4/5 rounded-lg">
              <div className="h-[2em] w-4/5 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Spinner className="me-2" color={color} /> {/* Ignore error, should be fine */}
          </CardHeader>
          <Divider />
          <CardBody className="gap-y-4 my-2">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </CardBody>
          <Divider />
          <CardFooter className="justify-between">
            <Skeleton className="h-[1em] w-[4em] rounded-lg">
              <div className="h-[1em] w-[4em] rounded-lg bg-default-300"></div>
            </Skeleton>
            <p className="text-sm opacity-70 me-2">Loading</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}