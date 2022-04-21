package alliance.pulkovo;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                    .antMatchers("/", "/bundle/**", "/resources/**", "/congratulation/**").permitAll()
                    .anyRequest().authenticated()
                .and().formLogin()
                    .loginPage("/")
                    .loginProcessingUrl("/admin")
                    .defaultSuccessUrl("/admin", true)
                    .failureUrl("/?error=true");
    }
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                    .withUser("admin")
                    .password("1234")
                    .roles("ADMIN")
                .and()
                    .passwordEncoder(NoOpPasswordEncoder.getInstance());
    }
}
