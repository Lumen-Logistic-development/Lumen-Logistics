type SectionCardProps = {
  title: string;
  content: string;
  buttonText?: string;
  sub: string;
};

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  content,
  sub,
  buttonText,
}) => (
  <div className="bg-black p-4 rounded-xl shadow-sm flex flex-col justify-between">
    <div>
      <h3 className="text-md font-semibold text-white">{title}</h3>
      <p className="text-gray-600 text-xs mb-4">{sub}</p>
      <p className="text-sm text-gray-300">{content}</p>
    </div>
    {buttonText && (
   
      <button className="w-full mt-2 py-2 border border-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
        {buttonText}
      </button>
    )}
  </div>
);


export default SectionCard;