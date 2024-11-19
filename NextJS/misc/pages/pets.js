import Image from 'next/image'
function Pets(){
    return(
        <div>
            {
                ['1', '2', '3', '4', '5'].map((path) => {
                    return (
                        <div key={path}>
                            <Image
                                src={`/${path}.jpg`}
                                alt='pet'
                                width='200'
                                height='300'
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Pets