import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40"  />

            <div className={styles.profile}>
                <Avatar className={styles.avatar}
                    hasBorder={false}
                    src="https://github.com/chicaofmp.png"
                    alt="Chicaofmp avatar img"
                    
                />
                <strong>Francisco Moura</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}