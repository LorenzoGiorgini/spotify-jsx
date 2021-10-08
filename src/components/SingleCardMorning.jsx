import { Link } from "react-router-dom";

const SingleCardMorning = (props) => {
  return (
    <>
      {props.data && (
        <Link to={"/album-page/" + props.data.album.id}>
        <div className="card-top p-0 mb-2">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={props.data.album.cover_medium}
                className="img-fluid h-100 w-100"
              />
            </div>
            <div
              className="
                                    col-md-8
                                    d-flex
                                    justify-content-center
                                    align-items-center
                                "
            >
              <div className="card-body p-0 pl-1">
                <p className="card-text">
                  <span>{props.data.album.title}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        </Link>
      )}
    </>
  );
};

export default SingleCardMorning;
