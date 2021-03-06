import '../components/Card.scss';

const Card = ({
  firstColumnValues,
  firstColumnName,
  secondColumnName,
  secondColumnValues,
  thirdColumnName,
  thirdColumnValues,
  title,
  subtitle,
  actionText,
  className
}) => (
  <div className={`card ${className}`}>
    <div className="flex-row flex-justify-space-between flex-align-center">
      <div className="bold text-5">{title}</div>
      <div className="light">{subtitle}</div>
    </div>
    <div className="flex-row flex-justify-space-between">
      <div className="">
        <div className="light">{firstColumnName}</div>
        {
          firstColumnValues.map((value, index) => (
            <div className="bold" key={`first-column-${title}-${index}`}>{value}</div>
          ))
        }
      </div>
      <div>
        <div className="light">{secondColumnName}</div>
        {
          secondColumnValues.map((value, index) => (
            <div className="bold" key={`second-column-${title}-${index}`}>{value}</div>
          ))
        }
      </div>
      <div>
        <div className="light">{thirdColumnName}</div>
        {
          thirdColumnValues.map((value, index) => (
            <div className="bold" key={`third-column-${title}-${index}`}>{value}</div>
          ))
        }
      </div>
    </div>
    <div className="flex-justify-end">
      <div className="light">{actionText}</div>
    </div>
  </div>
);

Card.defaultProps = {
  title: '',
  subtitle: '',
  firstColumnName: '',
  firstColumnValues: [],
  secondColumnName: '',
  secondColumnValues: [],
  thirdColumnName: '',
  thirdColumnValues: [],
  actionText: '',
  className: 'blue'
}

export default Card;
