import React, {Fragment} from 'react';
import {Form} from "antd";
import {CustomForm} from "../../../components/CustomForm";
import {profileSettingForm} from "./form";
import {ProfileImageSetting} from "../ProfileImageSetting";
export const ProfileSetting = () => {
    const [form] = Form.useForm();
    const onFinish = () => {
    };
    return (
        <Fragment>
            <CustomForm title={"Profile Settings"}
                        form={form}
                        onFinish={onFinish}
                        elements={profileSettingForm}
                        type={"PROFILE"}
            >
                <ProfileImageSetting/>
            </CustomForm>
        </Fragment>
    );
};