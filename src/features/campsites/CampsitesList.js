import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
  const campsites = selectAllCampsites();
  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        return (
          <Col md="7" className="m-4" key={campsite.id}>
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;
