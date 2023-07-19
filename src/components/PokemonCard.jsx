import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ data }) => {
  return (
    <>
      <Card
        title={data.name}
        cover={<img src="" alt="ditto" />}
        extra={<StarOutlined />}
        bordered={false}
      >
        <Meta description={data.abilities} />
      </Card>
    </>
  );
};

export default PokemonCard;
