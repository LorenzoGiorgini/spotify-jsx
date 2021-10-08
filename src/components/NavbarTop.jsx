const NavbarTop = () => {
    return (
        <nav id="jumbo-navbar" className="navbar navbar-expand-lg navbar-dark ">
            <div className="nav-item active" style={{ color: "white" }}>
                <i className="bi bi-chevron-left" />
            </div>
            <div className="nav-item text-muted ml-3">
                <i className="bi bi-chevron-right" />
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" />
                <div>
                <div className="dropdown d-inline-block">
                    <a
                    className="btn nav-btn dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: "white" }}
                    >
                    <img
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        width={28}
                        height={28}
                        className="mr-1"
                        style={{ borderRadius: "50%" }}
                    />
                    <span className="d-inline-block">Diego 'Ziba' Balack</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">
                        Action
                    </a>
                    <a className="dropdown-item" href="#">
                        Another action
                    </a>
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>

    )
}

export default NavbarTop