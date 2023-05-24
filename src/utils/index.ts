import { LIST_AUTHOR } from '@/constant/Author'

export const guidGenerator = () => {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}

export const convertToSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export const onErrorImage = (e: any) => {
  e.target.src =
    'https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg'
}

export const getAuthorName = (id: number) => {
  const author = LIST_AUTHOR.find((item) => item.id === id)
  return author ? author.name : ''
}
