import MKC from "../assets/MKC logo.jpg";

const Leaders = [
  {
    id: 1,
    img: MKC,
    name: "Pastor Kasahun Ambo",
    tag: "Main Leader Of Yeka MKC church",
  },
  {
    id: 2,
    img: MKC,
    name: "Pastor Yohannes",
    tag: "Senior Pastor of the Church,Teaches discipleship",
  },
  {
    id: 3,
    img: MKC,
    name: "Pastor Aynalem",
    tag: "Senior Pastor of the Church,",
  },
];

function Leadership() {
  return (
    <div className="flex justify-around flex-wrap gap-6 mb-9">
      {Leaders.map((content) => (
        <div
          key={content.id}
          className="bg-white w-100 h-62 rounded-2xl shadow-xl hover:bg-amber-100 transition-all ease-in-out duration-300"
        >
          <img
            src={content.img}
            alt="Leaders Pic"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
          />
          <p className="text-center font-bold text-lg ">{content.name}</p>
          <p className="text-center text-base mt-2.5 text-gray-600">
            {content.tag}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Leadership;
