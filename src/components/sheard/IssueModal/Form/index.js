import { Form, Input, Select, Space } from "antd";
import { ISSUE_OPTIONS, ISSUE_PRIORITY_OPTIONS } from "../../../../core/utilis/issues";
import Editor from "../../Editor";

const ModalForm = ({ form, onFinish }) => {
    return(
        <Form
        layout="vertical" 
        form={form} 
        onFinish={onFinish}
        >
            <Form.Item 
            name='issueName'
            label='Issue Name'
            rules={[{
                required: true,
                message: 'Plaese Input Issue Name'
            }]}
            >
                <Input type='text' placeholder="Issue Name"/>
            </Form.Item>
            <Form.Item
            name='type'
            label='Issue Type'
            rules={[{
                required: true,
                message: 'Plaese Select Issue Type'
            }]}
            >
                <Select>
                    {
                        Object.values(ISSUE_OPTIONS).map(({ value, icon, label }) => {
                            return(
                                <Select.Option value={value} key={value}>
                                    <Space>
                                        {icon}
                                        <span>{label}</span>
                                    </Space>
                                </Select.Option>
                            )
                        })
                    }
                </Select>
            </Form.Item>
            <Form.Item
            name='describtion'
            label='Describtion'
            rules={[{
                required: true,
                message: 'Please input Issue Describtion'
            }]}
            >
                <Editor/>
            </Form.Item>
            <Form.Item
            name='priority'
            label='Issue Priority'
            rules={[{
                required: true,
                message: 'Plaese Select Issue Priority'
            }]}
            >
                <Select>
                    {
                        Object.values(ISSUE_PRIORITY_OPTIONS).map(({ value, icon, label }) => {
                            return(
                                <Select.Option value={value} key={value}>
                                    <Space>
                                        {icon}
                                        <span>{label}</span>
                                    </Space>
                                </Select.Option>
                            )
                        })
                    }
                </Select>
            </Form.Item>
        </Form>
    )
};

export default ModalForm;