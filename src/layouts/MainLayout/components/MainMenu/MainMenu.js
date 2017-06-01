import React from 'react'

import SearchIcon from 'material-ui/svg-icons/action/search'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import AccountIcon from 'material-ui/svg-icons/action/account-box'
import HelpIcon from 'material-ui/svg-icons/action/help'
import StatisticsIcon from 'material-ui/svg-icons/editor/insert-chart'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import IconMenu from 'material-ui/IconMenu'

import classes from './MainMenu.scss'

const innerMenuItemStyle = { paddingLeft: '50px' }
const menuItemStyle = { WebkitAppearance: 'none' }
const selectedMenuItemStyle = { color: '#212121', fontWeight: '600' }

const SEARCH_PAGE_LOCATION = '/'
const SETTINGS_PAGE_LOCATION = '/crawlers'
const STAT_PAGE_LOCATION = '/statistics'
const ACCOUNT_PAGE_LOCATION = '/account'

export const SideMenu = ({ isOpen, currentLocation, changeLocation, toggleMainMenu, allowedRoutes }) => (
    <IconMenu
      iconButtonElement={<IconButton><MenuIcon color='white'/></IconButton>}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      menuStyle={{marginTop: '-16px'}}
      open={isOpen}
      onTouchTap={() => toggleMainMenu()}
      onRequestChange={(open, reason) => {if (reason === 'clickAway') {
        toggleMainMenu()
      }}}
    >
      <Menu value={currentLocation} selectedMenuItemStyle={selectedMenuItemStyle} disableAutoFocus={true} >
        {allowedRoutes.includes(SEARCH_PAGE_LOCATION) &&
          <MenuItem
            onTouchTap={() => changeLocation(SEARCH_PAGE_LOCATION)}
            value={SEARCH_PAGE_LOCATION}
            leftIcon={<SearchIcon />}
            innerDivStyle={innerMenuItemStyle}
            style={menuItemStyle}>
            Search
        </MenuItem>
        }
        {allowedRoutes.includes(SETTINGS_PAGE_LOCATION) &&
          <MenuItem
            onTouchTap={() => changeLocation(SETTINGS_PAGE_LOCATION)}
            value={SETTINGS_PAGE_LOCATION}
            leftIcon={<SettingsIcon />}
            innerDivStyle={innerMenuItemStyle}
            style={menuItemStyle}>
            Settings
        </MenuItem>
        }
        {allowedRoutes.includes(STAT_PAGE_LOCATION) &&
          <MenuItem
            onTouchTap={() => changeLocation(STAT_PAGE_LOCATION)}
            value={STAT_PAGE_LOCATION}
            leftIcon={<StatisticsIcon />}
            innerDivStyle={innerMenuItemStyle}
            style={menuItemStyle}>
            Statistics
        </MenuItem>
        }
        {allowedRoutes.includes(ACCOUNT_PAGE_LOCATION) &&
          <MenuItem
            onTouchTap={() => changeLocation(ACCOUNT_PAGE_LOCATION)}
            value={ACCOUNT_PAGE_LOCATION}
            leftIcon={<AccountIcon />}
            innerDivStyle={innerMenuItemStyle}
            style={menuItemStyle}>
            Account
        </MenuItem>
        }
      </Menu>
    </IconMenu>
)

SideMenu.propTypes = {
  allowedRoutes: React.PropTypes.array.isRequired,
  isOpen: React.PropTypes.bool.isRequired,
  currentLocation: React.PropTypes.string.isRequired,
  changeLocation: React.PropTypes.func.isRequired,
  toggleMainMenu: React.PropTypes.func.isRequired
}

export default SideMenu