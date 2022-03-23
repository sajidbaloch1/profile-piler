<!-- Sidebar -->
<div class="sidebar">
    <!-- Sidebar user panel (optional) -->


    <!-- SidebarSearch Form -->
    <!-- Sidebar Menu -->
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
                <a href="{{ route('dashboard') }}"
                    class="nav-link {{ request()->routeIs('dashboard') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        {{ __('Dashboard') }}
                        {{-- <span class="right badge badge-danger">New</span> --}}
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('curated-lists.index') }}"
                    class="nav-link {{ request()->routeIs('curated-lists.*') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                        {{ __('Curated Lists') }}
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('keywords.index') }}"
                    class="nav-link {{ request()->routeIs('keywords.*') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                        {{ __('Keywords') }}
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('tags.index') }}"
                    class="nav-link {{ request()->routeIs('tags.*') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                        {{ __('tags') }}
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('search-logs.index') }}"
                    class="nav-link {{ request()->routeIs('search-logs.*') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                        {{ __('Search Logs') }}
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('jobs.index') }}"
                    class="nav-link {{ request()->routeIs('jobs.*') ? 'active' : '' }}">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                        {{ __('Jobs') }}
                    </p>
                </a>
            </li>
        </ul>
    </nav>
    <!-- /.sidebar-menu -->
</div>
<!-- /.sidebar -->
