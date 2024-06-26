import PropertyCard from './PropertyCard';
import { fetchProperties } from '@/utils/requests';

const HomeProperties = async () => {
    const properties = await fetchProperties();
    const recentProperties = properties
        .sort(() => Math.random() - Math.random())
        .slice(0, 3)

    return (
        <>
            <section className="px-4 py-6">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                        Recent Properties
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {properties.length === 0 ? (
                            <p>No Properties Found</p>
                        ) : (
                            recentProperties.map((property) => {
                                return <PropertyCard key={property._id} property={property} />
                            })
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeProperties