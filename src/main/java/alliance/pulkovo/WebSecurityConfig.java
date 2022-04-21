package alliance.pulkovo;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
//                    .antMatchers("/", "/bundle/**", "/resources/**", "congratulation/**").permitAll()
//                    .anyRequest().authenticated()
                    .anyRequest().permitAll()
                .and().formLogin()
                    .loginPage("/").defaultSuccessUrl("/admin", true);
    }
}
