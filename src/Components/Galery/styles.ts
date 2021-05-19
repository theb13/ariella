import styled from "styled-components"

export const Container = styled.section`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 20px;

        li {
            list-style: none;
            background: #eee;
            margin: 5px;

            letter-spacing: 1px;
            cursor: pointer;
            &.active {
                background: #03a9f4;
                button {
                    color: #fff;
                }
            }
            button {
                padding: 12px 20px;
            }
        }
    }

    .galery {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .galery-item-box {
            position: relative;
            width: 200px;
            height: 200px;
            margin: 5px;
            display: block;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &.hide {
                display: none;
            }
        }
    }
`
