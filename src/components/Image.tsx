type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function Image(props: Props) {
  return (
    <img {...props} className="lex h-20 object-cover rounded-md shadow-md" />
  );
}
