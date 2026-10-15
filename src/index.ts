abstract class Forma {
    constructor(
        public nome: string
    ) {}

    abstract calcularArea(): number;
}

class Quadrado extends Forma {

    constructor(
        public lado: number
    ) {
        super("Quadrado");
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
}

class Retangulo extends Forma {

    constructor(
        public base: number,
        public altura: number
    ) {
        super("Retângulo");
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

class Triangulo extends Forma {

    constructor(
        public base: number,
        public altura: number
    ) {
        super("Triângulo");
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

class Circulo extends Forma {

    constructor(
        public raio: number
    ) {
        super("Círculo");
    }

    calcularArea(): number {
        return Math.PI * (this.raio ** 2);
    }
}

const quadrado = new Quadrado(5);

const retangulo = new Retangulo(
    10,
    4
);

const triangulo = new Triangulo(
    8,
    6
);

const circulo = new Circulo(3);

console.log(
    `${quadrado.nome}: ${quadrado.calcularArea()}`
);

console.log(
    `${retangulo.nome}: ${retangulo.calcularArea()}`
);

console.log(
    `${triangulo.nome}: ${triangulo.calcularArea()}`
);

console.log(
    `${circulo.nome}: ${circulo.calcularArea()}`
);