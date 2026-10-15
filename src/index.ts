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