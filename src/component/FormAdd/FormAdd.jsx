import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FormAdd = ({ action, type, submitName, setPatch }) => {
  const [author, setAuthors] = useState([]);
  const [genre, setGenre] = useState([]);
  const [form] = Form.useForm();

  const getAuthors = async () => {
    try {
      const response = await axios.get("http://localhost:3000/author");
      if (response.status == 200) {
        setAuthors(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getGenre = async () => {
    try {
      const response = await axios.get("http://localhost:3000/genre");
      if (response.status == 200) {
        setGenre(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAuthors();
    getGenre();
  }, []);
  return (
    <>
      <Form
        className="formm"
        autoComplete="off"
        form={form}
        onFinish={(e) => {
          action(e);
        }}
      >
        {type == "add" && (
          <>
            <Form.Item
              name="title"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Title Can't be empty",
                },
              ]}
            >
              <Input className="inp" placeholder="Input Your Title!!" />
            </Form.Item>
            <Form.Item
              name="author_id"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Author Can't be empty",
                },
              ]}
            >
              <Select
                showSearch
                className="sel"
                placeholder="Search Author to select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={author?.map((authors, index) => {
                  return {
                    value: `${authors.id}`,
                    label: `${authors.label}`,
                  };
                })}
              />
            </Form.Item>
            <Form.Item
              name="cover"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Cover Can't be empty",
                },
              ]}
            >
              <Input className="inp" placeholder="Input Your Cover!!" />
            </Form.Item>
            <Form.Item
              name="genre"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Genre Can't be empty",
                },
              ]}
            >
              <Select
                showSearch
                className="sel"
                placeholder="Search genre to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={genre?.map((genres, index) => {
                  return {
                    value: `${genres.genre}`,
                    label: `${genres.genre}`,
                  };
                })}
              />
            </Form.Item>
            <Form.Item
              name="desc"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Description Can't be empty",
                },
              ]}
            >
              <TextArea
                rows={5}
                className="ta-inp"
                placeholder="Input Your Description..."
              ></TextArea>
            </Form.Item>
          </>
        )}
        {type == "update" && (
          <>
            {form.setFieldsValue({
              id: `${setPatch.id}`,
              title: `${setPatch.title}`,
              author_id: `${setPatch.authorId}`,
              cover: `${setPatch.cover}`,
              genre: `${setPatch.genre}`,
              desc: `${setPatch.desc}`,
            })}
            <Form.Item name="id" hidden>
              <Input className="inp" placeholder="Input Your Title!!" />
            </Form.Item>
            <Form.Item
              name="title"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Title Can't be empty",
                },
              ]}
            >
              <Input value="udcjdcbdbcjdbcjdbcjdbcjbd" className="inp" placeholder="Input Your Title!!" />
            </Form.Item>
            <Form.Item
              name="author_id"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Author Can't be empty",
                },
              ]}
            >
              <Select
                showSearch
                className="sel"
                placeholder="Search Author to select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={author?.map((authors, index) => {
                  return {
                    value: `${Number(authors.id)}`,
                    label: `${authors.label}`,
                  };
                })}
              />
            </Form.Item>
            <Form.Item
              name="cover"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Cover Can't be empty",
                },
              ]}
            >
              <Input className="inp" placeholder="Input Your Cover!!" />
            </Form.Item>
            <Form.Item
              name="genre"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Genre Can't be empty",
                },
              ]}
            >
              <Select
                showSearch
                className="sel"
                placeholder="Search genre to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={genre?.map((genres, index) => {
                  return {
                    value: `${genres.genre}`,
                    label: `${genres.genre}`,
                  };
                })}
              />
            </Form.Item>
            <Form.Item
              name="desc"
              className="item-inp"
              rules={[
                {
                  required: true,
                  message: "Description Can't be empty",
                },
              ]}
            >
              <TextArea
                rows={5}
                className="ta-inp"
                placeholder="Input Your Description..."
              ></TextArea>
            </Form.Item>
          </>
        )}
        <Form.Item className="item-butt">
          <Button className="subb" htmlType="submit">
            {submitName}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormAdd;
