import PropTypes from "prop-types";

const SignedIn = ({ signedIn }) => {
    return (
        <div>
            <h3>
                Status:{" "}
                <span style={{ color: signedIn ? "green" : "red" }}>
                    {signedIn ? "Contacto En Línea" : "Contacto No Disponible"}
                </span>
            </h3>
        </div>
    );
};

SignedIn.propTypes = {
    signedIn: PropTypes.bool
};

export default SignedIn;
