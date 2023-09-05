import Button from "@/ui/Button";
import CircularButton from "@/ui/CircularButton";

export default function Home() {
  return (
    <main>
      hello world
      <Button intent="primary">Primary</Button>
      <Button intent="secondary">secondary</Button>
      <Button intent="tertiary">tertiary</Button>
      <CircularButton intent="add" />
    </main>
  );
}
