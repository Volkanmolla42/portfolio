export default function PlaySound({ url }) {
  const audio = new Audio(url);
  audio.play();
}
