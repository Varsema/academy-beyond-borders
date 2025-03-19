import Slider from "./Slider/Slider";
import CancelledFlights from "./CancelledFlights/CancelledFlights";
import MechanicalIssues from "./Mechanical Issues/MechanicalIssues";


function BlogPage() {
  return (
    <div>
      <Slider />
      <CancelledFlights />
      <MechanicalIssues />
    </div>
  );
}

export default BlogPage;
