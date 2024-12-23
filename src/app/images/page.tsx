import { categories, randomCategory } from "@/lib/db"
import Image from "next/image"

const page = () => {

    return (
        <div>
            {categories.map((category, index) => {
                return (
                    <div key={index}>
                        <Image src={category.imgSrc} alt={category.imgAlt} width={1000} height={1000} />
                        <h1>{category.titleFa}</h1>
                        <hr />
                    </div>
                )
            })}

            {randomCategory.map((category, index) => {
                return (
                    <div key={index}>
                        <Image src={category.img} alt={category.english} width={1000} height={1000} />
                        <h1>{category.persian}</h1>
                        <hr />
                    </div>
                )
            })}
        </div>
    )

}

export default page