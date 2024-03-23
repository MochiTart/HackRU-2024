import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="panel panel-primary" id="result_panel">
      <div className="panel-heading">
        <h3 className="panel-title">Friends</h3>
      </div>
      <div className="panel-body">
        <ul className="list-group">
          <li className="list-group-item">
            <img
              src="data:image/png;base64,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"
              alt="Image Not Loaded"
              className="img-thumbnail"
            />
            <strong>Signature Accommodations</strong>(1480m)
          </li>
          <li className="list-group-item">
            <img
              src="data:image/png;base64,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"
              alt="Image Not Loaded"
              className="img-thumbnail"
            />
            <strong>Signature Accommodations</strong>(1480m)
          </li>
          <li className="list-group-item">
            <img
              src="data:image/png;base64,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"
              alt="Image Not Loaded"
              className="img-thumbnail"
            />
            <strong>Signature Accommodations</strong>(1480m)
          </li>
        </ul>
      </div>
    </div>
  );
}
