import React from 'react'
import { Link } from 'react-router-dom'
import AppStorage from '../../helpers/AppStorage'

export const SideBar = () => {
  return (
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
            <Link to="/dashboard" className="nav-link ">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
            </Link>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#users-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-person"></i><span>Users</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="users-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

            <li>
                <Link to="/users/create">
                    <i className="bi bi-circle"></i><span>Add User</span>
                </Link>
            </li>
            <li>
                <Link to="/users">
                    <i className="bi bi-circle"></i><span>All Users</span>
                </Link>
            </li>
            </ul>
        </li>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="/deposits">
                <i className="bi bi-menu-button-wide"></i>
                <span>Deposits</span>
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="/withdraws">
                <i className="bi bi-menu-button-wide"></i>
                <span>Withdraws</span>
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="/payments">
                <i className="bi bi-exclude"></i>
                <span>Payment Info</span>
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="/links">
                <i class="bi bi-link-45deg"></i>
                <span>Links</span>
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="/user/profile">
                <i className="bi bi-person"></i>
                <span>Profile</span>
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="/logout">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Logout</span>
            </Link>
        </li>

        </ul>

        </aside>
  )
}
