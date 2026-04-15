import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios" // 1. เพิ่มการ Import axios
import './App.css'

const API_URL = 'https://69df62c9d6de26e119294a16.mockapi.io/api/v1/todo/users';

function EditPage2() {
    const { id } = useParams();
    const [todo, setTodo] = useState({ name: '' }); 
    const [isLoading, setIsLoading] = useState(false); // 2. เพิ่ม State สำหรับ Loading

    async function fetchTodo() {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            const data = await response.json();
            setTodo(data);
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    }

    // 3. ฟังก์ชันสำหรับบันทึกข้อมูลไปที่ API เมื่อกดปุ่ม
    async function updatename() {
        try {
            setIsLoading(true);
            await axios.put(`${API_URL}/${id}`, { name: todo.name });
            setIsLoading(false);
            alert("อัปเดตชื่อสำเร็จแล้ว!");
        } catch (error) {
            console.error('Error updating todo:', error);
            setIsLoading(false);
        }
    }

    // 4. ฟังก์ชันสำหรับเปลี่ยนค่าใน State ตามที่เราพิมพ์
    function handleInputChange(event) {
        setTodo((previousState) => ({
            ...previousState,
            name: event.target.value
        }));
    }

    useEffect(() => {
        fetchTodo();
    }, [id]);

    return (
        <div>
            <h1>Edit Page</h1>
            <p>Editing ID: {id}</p>
            
            <div style={{ marginBottom: '20px' }}>
                <img src={todo.avatar} alt={todo.name} width="100" style={{ borderRadius: '10px' }} />
            </div>

            <h2>ชื่อปัจจุบัน: {todo.name}</h2> 
            
            <input 
                type="text" 
                value={todo.name || ''} 
                onChange={handleInputChange} // 5. แก้ชื่อฟังก์ชันให้ตรงกัน
                style={{ padding: '10px', fontSize: '16px' }}
            />
            
            <button 
                style={{ marginLeft: '10px' }} 
                onClick={updatename}
                disabled={isLoading} // ป้องกันกดซ้ำตอนกำลังโหลด
            >
                {isLoading ? "Updating..." : "Update"}
            </button>
        </div>
    );
}

export default EditPage2;
