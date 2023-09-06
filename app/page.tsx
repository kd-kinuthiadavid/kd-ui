import Button from "@/ui/Button";
import CircularButton from "@/ui/CircularButton";

export default function Home() {
  function handleButtonClick() {
    alert("HA!");
  }
  return (
    <main>
      hello world
      <Button intent="primary" handleButtonClick={handleButtonClick}>
        Primary
      </Button>
      <Button intent="secondary" handleButtonClick={handleButtonClick}>
        secondary
      </Button>
      <Button intent="tertiary" handleButtonClick={handleButtonClick}>
        tertiary
      </Button>
      <CircularButton intent="add" />
    </main>
  );
}
