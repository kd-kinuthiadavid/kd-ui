import Button from "@/ui/Button";
import CircularButton from "@/ui/CircularButton";

export default function Home() {
  function handleButtonClick() {
    alert("HA!");
  }
  return (
    <main>
      hello world
      <Button
        intent="primary"
        handleButtonClick={handleButtonClick}
        text="Primary"
      />
      <Button
        intent="secondary"
        handleButtonClick={handleButtonClick}
        text="Secondary"
      />
      <Button
        intent="tertiary"
        handleButtonClick={handleButtonClick}
        text="Tertiary"
      />
      <CircularButton intent="add" />
    </main>
  );
}
