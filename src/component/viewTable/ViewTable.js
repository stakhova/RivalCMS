import React, {useState} from "react";
import {ViewEdit, ViewText} from "../viewElem/ViewElem.style";
import CustomSwitch from "../customSwitch/CustomSwitch";
import EditttSvg from "../../icon/EditttSvg";
import Modal from "../modal/Modal";
import {Switch, SwitchInput, SwitchLabel, SwitchLabelText} from "../customSwitch/CustomSwitch.style";



const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};


const SortButton = ({ direction, id, onClick, sortBy,nameBut }) => {
    const arrows = { ascending: '↓', descending: '↑' }
    const arrow = sortBy === id ? arrows[direction] : '↕︎'

    return (
        <button id={id} onClick={onClick}>
            {nameBut}{arrow}
            {/*<button>{direction}</button>*/}
        </button>
    )
}

const ViewTable = ({lists, ...props}) => {
    const { items, requestSort, sortConfig } = useSortableData(
        lists,
        props.config
    )
    const [isToggled, setIsToggled] = useState(false);

    const openModal = () => {setShowModal((prev) => !prev);};
    const [showModal, setShowModal] = useState(false);

    return (
        <table>
            <thead>
            <tr>
                <th>
                    <SortButton
                        nameBut={'Page title '}
                        direction={sortConfig?.direction}
                        id="namePage"
                        onClick={() => requestSort('namePage')}
                        sortBy={sortConfig?.key}
                    />
                </th>
                <th>
                    <SortButton
                        nameBut={'Created '}
                        direction={sortConfig?.direction}
                        id="updatePage"
                        onClick={() => requestSort('updatePage')}
                        sortBy={sortConfig?.key}
                    />
                </th>
                <th>
                    <SortButton
                        nameBut={'Status '}
                        // direction={sortConfig?.direction}
                        // id="name"
                        // onClick={() => requestSort('name')}
                        // sortBy={sortConfig?.key}
                    />
                </th>
                <th>
                    <SortButton
                        nameBut={'Author '}
                        direction={sortConfig?.direction}
                        id="authorPage"
                        onClick={() => requestSort('authorPage')}
                        sortBy={sortConfig?.key}
                    />
                </th>
            </tr>
            </thead>
            <tbody>
            {items.map(list => (
                <tr key={list.id}>
                    <td> <ViewText bold>{list.namePage}</ViewText></td>
                    <td> <ViewText >{list.updatePage}</ViewText></td>
                    <td>
                        <CustomSwitch
                            idCheck={list.id}
                            isToggled={isToggled}
                            onToggle={() => {
                                setIsToggled(!isToggled)
                                console.log(list.id)
                            }}
                        />
                        {/*<Switch>*/}
                        {/*    <SwitchInput*/}
                        {/*        id={list.id}*/}
                        {/*        // checked={isChecked}*/}
                        {/*        // onChange={handleSwitch}*/}
                        {/*        checked={isToggled}*/}
                        {/*        onChange={onToggle}*/}
                        {/*        type="checkbox"*/}
                        {/*    />*/}
                        {/*    <SwitchLabel*/}
                        {/*        htmlFor={list.id}*/}
                        {/*    >*/}
                        {/*        <SwitchLabelText> Published </SwitchLabelText>*/}
                        {/*    </SwitchLabel>*/}
                        {/*</Switch>*/}
                    </td>
                    <td><ViewText >{list.authorPage}</ViewText></td>
                    <td><ViewText  user>{list.userPage}</ViewText></td>
                    <td><ViewEdit showModal={showModal}
                                  setShowModal={setShowModal} onClick={openModal}><EditttSvg/></ViewEdit>
                    </td>
                    <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default ViewTable
