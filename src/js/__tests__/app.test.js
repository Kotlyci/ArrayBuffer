import ArrayBufferConverter from '../classes/ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('загрузка данных', () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    arrayBufferConverter.load(getBuffer());
    expect(arrayBufferConverter.buffer).toEqual(getBuffer());
})

test('перевод загруженного в строку', () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    arrayBufferConverter.load(getBuffer());
    expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})