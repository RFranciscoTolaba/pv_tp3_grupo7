const usuarios = [
    {
        id: 1,
        nombre: "Ricardo Condori",
        usuario: "rcondori",
        password: "rc1234",
        rol: "Alumno"
    },
    {
        id: 2,
        nombre: "Francisco Tolaba",
        usuario: "ftolaba",
        password: "ft1234",
        rol: "Alumno"
    },
    {
        id: 3,
        nombre: "Gerardo Reyes",
        usuario: "greyes",
        password: "gr1234",
        rol: "Alumno"
    },
    {
        id: 4,
        nombre: "Kevin Llampa",
        usuario: "kllampa",
        password: "kl1234",
        rol: "Alumno"
    },
    {
        id: 5,
        nombre: "Lucas Segovia",
        usuario: "lsegovia",
        password: "ls1234",
        rol: "Docente"
    }
];

const login = (user, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const encontrado = usuarios.find(
                (u) => u.usuario === user && u.password === password
            );

            if (encontrado) {
                const { id, nombre, rol } = encontrado;
                resolve({ id, nombre, rol });
            } else {
                reject(new Error("Usuario o contraseña incorrectos."));
            }
        }, 800);
    });
};

const autorizacionesService = { login };

export default autorizacionesService;