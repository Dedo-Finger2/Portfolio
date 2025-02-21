interface HashtagProps {
  text: string;
  bgColor: string;
  textColor: string;
}

export default function Hashtag({ text, bgColor, textColor }: HashtagProps) {
  return (
    <span className={`text-sm px-1 rounded-sm ${bgColor} ${textColor}`}>
      #{text}
    </span>
  );
}
