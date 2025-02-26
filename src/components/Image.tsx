type Props = React.ImgHTMLAttributes<HTMLImageElement> & { shape?: ImageShape };

type ImageShape = "square" | "circle";

export default function Image({ shape, ...props }: Props) {
  return (
    <img
      {...props}
      className={`flex h-20 object-contain bg-zinc-400/5 p-2 max-w-26 rounded-md shadow-md ${shape === "square" ? "sm:rounded-sm" : "sm:rounded-full"} sm:self-start sm:h-25`}
    />
  );
}
