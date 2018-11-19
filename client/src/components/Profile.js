import React, { Component } from "react";
import Spacer from "./Spacer";
import EventChip from "./EventChip";
import ImageForm from "./ImageForm";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editName: false,
            editProfession: false,
            name: "",
            profession: "",
            imageurl: "",
            imageForm: false
        };
    }

    componentWillReceiveProps() {
        const { user } = this.props;
        console.log(user);
        if (user) {
            const { name, profession, imageurl } = user;
            this.setState({
                name: name,
                profession: profession,
                imageurl: imageurl
            });
        }
    }

    updateName = () => {
        console.log(`user name to be updated to ${this.refs.name.value}`);
        const { user } = this.props;
        const { id } = user;
        const updatedUser = {
            username: user.username,
            password: user.password,
            name: this.refs.name.value,
            profession: user.profession,
            imageurl: user.imageurl
        };
        user["name"] = this.refs.name.value;
        fetch(`/users/${id}`, {
            body: JSON.stringify(updatedUser),
            method: "PUT",
            headers: {
                //prettier-ignore
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log(res);
                this.setState({
                    editName: !this.state.editName,
                    name: this.refs.name.value
                });
            })
            .catch(err => console.log(err));
    };

    updateProfession = () => {
        console.log(
            `profession to be updated to ${this.refs.profession.value}`
        );
        const { user } = this.props;
        const { id } = user;
        const updatedUser = {
            username: user.username,
            password: user.password,
            name: user.name,
            profession: this.refs.profession.value,
            imageurl: user.imageurl
        };
        user["profession"] = this.refs.profession.value;
        fetch(`/users/${id}`, {
            body: JSON.stringify(updatedUser),
            method: "PUT",
            headers: {
                //prettier-ignore
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log(res);
                this.setState({
                    editProfession: !this.state.editProfession,
                    profession: this.refs.profession.value
                });
            })
            .catch(err => console.log(err));
    };

    updateImageForUser = (e, imageRef) => {
        console.log(`update users image url in db`);
        const { imageForm } = this.state;
        e.preventDefault();
        const { user } = this.props;
        console.log(imageRef);
        const updatedUser = {
            username: user.username,
            password: user.password,
            name: user.name,
            profession: user.profession,
            imageurl: imageRef
        };
        fetch(`/users/${user.id}`, {
            body: JSON.stringify(updatedUser),
            method: "PUT",
            headers: {
                //prettier-ignore
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log(res);
                this.setState({
                    imageurl: imageRef,
                    imageForm: !imageForm
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        const {
            name,
            profession,
            editName,
            editProfession,
            imageForm,
            imageurl
        } = this.state;
        console.log(
            `Editname: ${editName} & EditProfession: ${editProfession}`
        );
        return (
            <div className="flex1 flex relative">
                {imageForm ? (
                    <ImageForm
                        updateImageForUser={(e, imageRef) =>
                            this.updateImageForUser(e, imageRef)
                        }
                        imageurl={imageurl}
                    />
                ) : null}
                <div className="flex1 flex column">
                    <div className="flex3 flex row aCenter jAround">
                        <Spacer w={40} />
                        <div
                            className="width200 height200 bRad100 white flex center fSize15 fQuicksand fPink cPointer"
                            onClick={() =>
                                this.setState({ imageForm: !imageForm })
                            }
                        >
                            {imageurl ? (
                                <img
                                    src={imageurl}
                                    alt="profile"
                                    className="width200 height200 bRad100"
                                />
                            ) : (
                                `Click here`
                            )}
                        </div>
                        <div className="width600 fullH flex column jCenter">
                            {!editName ? (
                                <div
                                    className="fSize4 fQuicksand fWhite cPointer"
                                    onClick={() =>
                                        this.setState({ editName: !editName })
                                    }
                                >
                                    {name ? name : "Enter name here"}
                                </div>
                            ) : (
                                <input
                                    type="text"
                                    className="fSize4 fQuicksand pink fWhite cPointer"
                                    ref="name"
                                    onClick={() => this.updateName()}
                                    autoFocus
                                    defaultValue={name}
                                />
                            )}
                            {!editProfession ? (
                                <div
                                    className="fSize2 fQuicksand fWhite cPointer"
                                    onClick={() =>
                                        this.setState({
                                            editProfession: !editProfession
                                        })
                                    }
                                >
                                    {profession
                                        ? profession
                                        : "Enter profession here"}
                                </div>
                            ) : (
                                <input
                                    type="text"
                                    className="fSize2 fQuicksand pink fWhite cPointer"
                                    ref="profession"
                                    onClick={() => this.updateProfession()}
                                    autoFocus
                                    defaultValue={profession}
                                />
                            )}
                        </div>
                        <Spacer w={40} />
                    </div>
                    <div className="flex2 flex column">
                        <div className="fQuicksand fSize2 fWhite tAlignCenter">
                            UPCOMING EVENTS FOR YOU:
                        </div>
                        <Spacer h={20} />
                        <div className="flex row aCenter jAround">
                            <Spacer w={40} />
                            <div className="flex row jAround">
                                <EventChip name="REACT" date="19 NOV" />
                                <Spacer w={20} />
                                <EventChip name="UI/UX" date="23 NOV" />
                                <Spacer w={20} />
                                <EventChip />
                                <Spacer w={20} />
                                <EventChip />
                                <Spacer w={20} />
                                <EventChip />
                            </div>
                            <Spacer w={40} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
