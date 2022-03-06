window.onload = () => {
    const node = document.createElement('div')
    const content = () => (`<div>'❤❤❤'</div><div id="compliment">${makeCompliment()}</div><div>'❤❤❤'</div>`)

    node.innerHTML = content()
    node.onclick = () => (node.innerHTML = content())
    node.id = 'container'

    document.body.appendChild(node)
}

class RichArray<T> {
    constructor(private arr: T[]) {}

    filter = (predicate: (value: T, index: number, array: T[]) => boolean): RichArray<T> => new RichArray<T>(this.arr.filter(predicate))

    random = (): T => {
        return this.arr[Math.floor(Math.random() * this.arr.length)]
    }
}

type Word = [string?, string?, string?];


const templates = new RichArray([
    `9&nbsp;из&nbsp;10&nbsp;врачей&nbsp;говорят`,
    'ученые&nbsp;выяснили&nbsp;что',
    `хочу&nbsp;сказать`,
    `не&nbsp;могу&nbsp;поверить&nbsp;что`,
    'обязан&nbsp;сказать',
    'считаю',
    'уверен',
    'это&nbsp;правда',
    'люди&nbsp;говорят',
])
const adverbs = new RichArray([
    'абсолютно',
    'ужасно',
    'абсолютно',
    'решительно',
    'глубоко',
    'дьявольски',
    'отчетливо',
    'особенно',
    'исключительно',
    'необычайно',
    'очень',
])

const finalTemplate = new RichArray([
    'у тебя',
])

const adjectives = new RichArray<Word>([
    ['очаровательный','очаровательная','очаровательные'],
    ['заманчивый','заманчивая','заманчивые'],
    ['красивый','красивая','красивые'],
    ['удивительный','удивительная','удивительные'],
    ['ангельский','ангельская', 'ангельские',],
    ['поразительный','поразительная','поразительные'],
    ['привлекательный','привлекательная','привлекательные'],
    ['потрясающий','потрясающая','потрясающие'],
    ['прекрасный','прекрасная','прекрасные'],
    ['чарующий','чарующая','чарующие'],
    ['захватывающий','захватывающая','захватывающие'],
])

const tangibleProperties = new RichArray<Word>([
    [undefined,'лодыжка','лодыжки'],
    [undefined, undefined,'ягодицы'],
    [undefined,undefined,'икры'],
    [undefined,'одежда',undefined],
    [undefined,undefined,'уши'],
    ['локоть',undefined,'локти'],
    [undefined,'бровь','брови'],
    [undefined,'ресница','ресницы'],
    ['глаз',undefined,'глаза'],
    [undefined,'попка',undefined],
    ['пупок',undefined,undefined],
    [undefined,'губа','губы'],
    ['мозг',undefined,'мозги'],
    [undefined,'смелость',undefined],
    [undefined,'мудрость',undefined],
    ['стиль',undefined,undefined],
    [undefined,'прямолинейность',undefined],
])


export function makeCompliment(): string {
    const prop = tangibleProperties.random()
    let index: number
    while (true) {
        index = Math.floor(Math.random() * prop.length)
        if (prop[index] !== undefined) {
            break
        }
    }

    return [
        templates.random(),
        finalTemplate.random(),
        adverbs.random(),
        adjectives.random()[index],
        prop[index]
    ].join(' ')
}

