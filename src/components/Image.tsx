type Props = React.ImgHTMLAttributes<HTMLImageElement> & { shape?: ImageShape };

type ImageShape = "square" | "circle";

export default function Image({ shape, ...props }: Props) {
  return (
    <img
      {...props}
      className={`flex h-20 object-cover rounded-md shadow-md ${shape === "square" ? "sm:rounded-sm sm:h-40" : "sm:rounded-full"} sm:self-start sm:h-25`}
    />
  );
}
