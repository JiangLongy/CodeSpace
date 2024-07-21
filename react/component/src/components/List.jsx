import PropTypes from 'prop-types';
const List = props => {
    const arr = props.colors
    const list = arr.map(item => <li key={item.id}>{item.name}</li>)
    return (
        <div>
            <ul>
                {list}
            </ul>
            <p>props的默认值</p>
        </div>
    );
};
List.PropTypes = {//为组件添加校验规则
    colors: PropTypes.array,
    obj:PropTypes.shape({
        name:PropTypes.string,
        id:PropTypes.number
    })
}
export default List;