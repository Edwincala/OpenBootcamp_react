import { useEffect, useState } from "react";

const Clock = () => {
    const [data, setData] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José"
    });

    useEffect(() => {
        const timerId = setInterval(
            () =>
                setData({
                    ...data,
                    edad: data.edad + 1,
                    fecha: new Date()
                }),
            1000
        );

        return () => {
            clearInterval(timerId);
        };
    }, [data]);

    return (
        <div>
            <h2 className="time">
                Hora Actual: {data.fecha.toLocaleTimeString()}
            </h2>
            <h3 className="name">
                {data.nombre} {data.apellidos}
            </h3>
            <h1 className="age">Edad: {data.edad}</h1>
        </div>
    );
};

export default Clock;
