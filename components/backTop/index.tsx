import dynamic from 'next/dynamic'

const DynamicPublish = dynamic(
    () => import('./backTop'),
    {
        ssr: false   //这个要加上,禁止使用 SSR
    }
)

export default () => <DynamicPublish />
