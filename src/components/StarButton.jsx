import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const StarButton = ({ isFavorite, onClick }) => {
  console.log("🚀 ~ file: StarButton.jsx:5 ~ StarButton ~ isFavorite:", isFavorite)
  const Icon = isFavorite ? StarFilled : StarOutlined;

  return (
    <>
      <Button icon={<Icon />} onClick={onClick} ></Button>
    </>
  );
};

export default StarButton;
