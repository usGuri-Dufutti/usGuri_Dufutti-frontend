import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Button } from "./button";

interface PopupProps {
  latitude: number;
  longitude: number;
  description: string;
}

function PopupComponent({ latitude, longitude, description }: PopupProps) {
  return (
    <Card className="w-64 h-64 bg-green-300/50 flex flex-col gap-2 shadow-md    ">
      <CardHeader>
        <CardTitle>Location Info</CardTitle>
      </CardHeader>

      <CardContent className="m-0">
        <p><b>Latitude:</b> {latitude.toFixed(5)}</p>
        <p><b>Longitude:</b> {longitude.toFixed(5)}</p>
      </CardContent>

      <CardContent className="border-1 border-green-500 rounded-2xl flex-grid-col items-center justify-center p-2">
      <p><b>Description:</b> {description}</p>
      <Button 
        className="w-full bg-green-500/50 hover:bg-green-500/70 active:scale-95"
        onClick={() => {
          console.log("More Info");
        }}
      >
            More Info
        </Button>
      </CardContent>
    </Card>
  );
}

export default PopupComponent;
