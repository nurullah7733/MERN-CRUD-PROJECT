import { Row } from 'react-bootstrap';
import CreateProduct from '../components/Create';

const CreatePage = () => {
    return (
        <div>
            <Row>
                <div className="col-md-8">
                    <CreateProduct />
                </div>
            </Row>
        </div>
    );
};

export default CreatePage;
