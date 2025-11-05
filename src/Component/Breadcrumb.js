const Breadcrumb = ({PageTitle,PageDescrption}) => {
    return <>
    <div className='pageDetails container mx-auto w-4/5 py-5'>
        <h4>{PageTitle}</h4>
        <p className='max-w-lg'>{PageDescrption}</p>
    </div>
    </>
}

export default Breadcrumb;