import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelActions.css';

export default function PanelActions() {
    return (
        <div className={"panel-actions"}>
            <button className={"panel-action-button"}>Chế độ học</button>
            <button className={"panel-action-button"}>Chế độ cày cuốc</button>
            <div style={{flex: 1, minHeight: 50}}/>
            <button className={"panel-action-button"}>Chỉnh sửa bộ sưu tập</button>
        </div>
    )
}