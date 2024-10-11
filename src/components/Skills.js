import { PythonOriginal, COriginal, CplusplusOriginal, Html5Original, Css3Original, JavascriptOriginal, SqliteOriginal, GitOriginal, TensorflowOriginal, PytorchOriginal, DartOriginal, DockerOriginal, PostgresqlOriginal, KaggleOriginal } from 'devicons-react';

function Skills() {
    return (
        <div className="Row">
            <div className="col">
            <div className="Logo"><PythonOriginal size={100}/></div>
            <p> Python </p>
            </div>
            <div className="col">
                <div className="Logo"><COriginal size={100}/></div>
                <p> C </p>
            </div>
            <div className="col">
                <div className="Logo"><CplusplusOriginal size={100}/></div>
                <p> C++ </p>
            </div>
            <div className="col">
                <div className="Logo"><Html5Original size={80}/></div>
                <p> HTML </p>
            </div>
            <div className="col">
                <div className="Logo"><Css3Original size={80}/></div>
                <p> CSS </p>
            </div>
            <div className="col">
                <div className="Logo"><JavascriptOriginal size={80}/></div>
                <p> JavaScript </p>
            </div>
            <div className="col">
                <div className="Logo"><DartOriginal size={80}/></div>
                <p> Dart </p>
            </div>
            <div className="col">
                <div className="Logo"><SqliteOriginal size={80}/></div>
                <p> SQLite </p>
            </div>
            <div className="col">
                <div className="Logo"><PostgresqlOriginal size={80}/></div>
                <p> PostgreSQL </p>
            </div>
            <div className="col">
                <div className="Logo"><GitOriginal size={80}/></div>
                <p> Git </p>
            </div>
            <div className="col">
                <div className="Logo"><TensorflowOriginal size={80}/></div>
                <p> TensorFlow </p>
            </div>
            <div className="col">
                <div className="Logo"><PytorchOriginal size={80}/></div>
                <p> PyTorch </p>
            </div>
            <div className="col">
                <div className="Logo"><KaggleOriginal size={80}/></div>
                <p> Kaggle </p>
            </div>
            <div className="col">
                <div className="Logo"><DockerOriginal size={80}/></div>
                <p> Docker </p>
            </div>
        </div>
    );
}

export default Skills;