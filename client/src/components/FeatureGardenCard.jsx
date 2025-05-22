const FeatureGardenCard = ({ garden }) => {
  const { name, role, image, status, location } = garden;
  console.log(garden);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-56 rounded-tr-2xl rounded-tl-2xl">
        <img className="w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Role: {role}</p>
        <div className="badge badge-outline">Status : {status}</div>
        <div className="badge badge-outline">Location: {location}</div>
      </div>
    </div>
  );
};

export default FeatureGardenCard;
