import './categoryJob.scss';

function CategoryJob({ name, numOfPosition } : { name : string, numOfPosition : string | number }) {
    return (
        <div className="categoryItem">
            <div className="categoryTitle">{name}</div>
            <div className="numsPosition">{numOfPosition} Position</div>
        </div>
    )
}

export default CategoryJob;