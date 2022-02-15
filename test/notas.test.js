const notas=require('../scripts/notas');

test('Muy deficiente',() => {
    expect(notas(0)).toBe("Muy deficiente");
} )
test('Muy deficiente',() => {
    expect(notas(1)).toBe("Muy deficiente");
} )
test('Muy deficiente',() => {
    expect(notas(2)).toBe("Muy deficiente");
} )
test('Insuficiente',() => {
    expect(notas(3)).toBe("Insuficiente");
} )
test('Insuficiente',() => {
    expect(notas(4)).toBe("Insuficiente");
} )
test('Suficiente',() => {
    expect(notas(5)).toBe("Suficiente");
} )
test('Bien',() => {
    expect(notas(6)).toBe("Bien");
} )
test('Notable',() => {
    expect(notas(7)).toBe("Notable");
} )
test('Notable',() => {
    expect(notas(8)).toBe("Notable");
} )
test('Sobresaliente',() => {
    expect(notas(9)).toBe("Sobresaliente");
} )
test('Sobresaliente',() => {
    expect(notas(10)).toBe("Sobresaliente");
} )